<?php

namespace App\Http\Controllers\MyClient;

use Inertia\Inertia;
use App\Services\MyClient\MyClientService;
use App\Http\Controllers\Controller;
use App\Http\Requests\MyClient\StoreMyClientRequest;
use App\Http\Requests\MyClient\UpdateMyClientRequest;

class MyClientController extends Controller
{
    protected $clientService;

    public function __construct(MyClientService $clientService)
    {
        $this->clientService = $clientService;
    }

    public function index()
    {
        $clients = $this->clientService->getAllClients();
        
        return Inertia::render('Clients/Index', [
            'clients' => $clients
        ]);
    }

    public function create()
    {
        return Inertia::render('Clients/Create');
    }

    public function store(StoreMyClientRequest $request)
    {
        $this->clientService->createClient($request->validated());
        
        return redirect()->route('clients.index')
            ->with('message', 'Client created successfully');
    }

    public function show(string $id)
    {
        $client = $this->clientService->getClient($id);
        
        return Inertia::render('Clients/Show', [
            'client' => $client
        ]);
    }

    public function edit(string $id)
    {
        $client = $this->clientService->getClient($id);
        
        return Inertia::render('Clients/Edit', [
            'client' => $client
        ]);
    }

    public function update(UpdateMyClientRequest $request, string $id)
    {
        $this->clientService->updateClient($id, $request->validated());
        
        return redirect()->route('clients.index')
            ->with('message', 'Client updated successfully');
    }

    public function destroy(string $id)
    {
        $this->clientService->deleteClient($id);
        
        return redirect()->route('clients.index')
            ->with('message', 'Client deleted successfully');
    }
}
