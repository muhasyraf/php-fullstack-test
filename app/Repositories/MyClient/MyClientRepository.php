<?php

namespace App\Repositories\MyClient;

use App\Models\MyClient\MyClient;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Storage;

class MyClientRepository implements MyClientRepositoryInterface
{
    protected $model;

    public function __construct(MyClient $model)
    {
        $this->model = $model;
    }

    public function all()
    {
        return $this->model->all();
    }

    public function find($id)
    {
        return $this->model->findOrFail($id);
    }

    public function create(array $data)
    {
        $client = $this->model->create($data);

        $this->storeInRedis($client);

        return $client;
    }

    public function update($id, array $data)
    {
        $client = $this->find($id);

        if (isset($data['client_logo']) && $client->client_logo !== 'no-image.jpg') {
            Storage::disk('s3')->delete($client->client_logo);
        }

        $client->update($data);

        $this->deleteFromRedis($client->slug);

        if (isset($data['slug'])) {
            $this->deleteFromRedis($client->getOriginal('slug'));
        }

        $this->storeInRedis($client);

        return $client;
    }

    public function delete($id)
    {
        $client = $this->find($id);
        $slug = $client->slug;

        $client->delete();

        $this->deleteFromRedis($slug);

        return true;
    }

    protected function storeInRedis($client)
    {
        Redis::set($client->slug, json_encode($client->toArray()));
    }

    protected function deleteFromRedis($slug)
    {
        Redis::del($slug);
    }
}
