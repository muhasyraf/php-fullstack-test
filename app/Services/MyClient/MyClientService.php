<?php

namespace App\Services\MyClient;

use App\Repositories\MyClient\MyClientRepositoryInterface;
use Illuminate\Support\Str;

class MyClientService
{
    protected $repository;

    public function __construct(MyClientRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function getAllClients()
    {
        return $this->repository->all();
    }

    public function getClient($id)
    {
        return $this->repository->find($id);
    }

    public function createClient(array $data)
    {
        $data['slug'] = Str::slug($data['name']);
        
        if (isset($data['client_logo'])) {
            $data['client_logo'] = $this->uploadLogo($data['client_logo']);
        }
        
        return $this->repository->create($data);
    }

    public function updateClient($id, array $data)
    {
        if (isset($data['name'])) {
            $data['slug'] = Str::slug($data['name']);
        }
        
        if (isset($data['client_logo']) && $data['client_logo'] !== null) {
            $data['client_logo'] = $this->uploadLogo($data['client_logo']);
        }
        
        return $this->repository->update($id, $data);
    }

    public function deleteClient($id)
    {
        return $this->repository->delete($id);
    }
    
    protected function uploadLogo($file)
    {
        $path = $file->store('client-logos', 's3');
        return $path;
    }
}
