import React from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { router } from "@inertiajs/react";

export default function Index({ auth, clients, flash }) {
    const deleteClient = (id) => {
        if (confirm("Are you sure you want to delete this client?")) {
            router.delete(route("clients.destroy", id));
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Clients
                </h2>
            }
        >
            <Head title="Clients" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            {/* {flash.message && (
                                <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
                                    {flash.message}
                                </div>
                            )} */}

                            <div className="flex justify-between mb-6">
                                <h1 className="text-2xl font-bold">
                                    Client List
                                </h1>
                                <Link
                                    href={route("clients.create")}
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Add New Client
                                </Link>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white">
                                    <thead>
                                        <tr>
                                            <th className="py-2 px-4 border-b">
                                                Name
                                            </th>
                                            <th className="py-2 px-4 border-b">
                                                Prefix
                                            </th>
                                            <th className="py-2 px-4 border-b">
                                                Is Project
                                            </th>
                                            <th className="py-2 px-4 border-b">
                                                City
                                            </th>
                                            <th className="py-2 px-4 border-b">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {clients.map((client) => (
                                            <tr key={client.id}>
                                                <td className="py-2 px-4 border-b">
                                                    {client.name}
                                                </td>
                                                <td className="py-2 px-4 border-b">
                                                    {client.client_prefix}
                                                </td>
                                                <td className="py-2 px-4 border-b">
                                                    {client.is_project === "1"
                                                        ? "Yes"
                                                        : "No"}
                                                </td>
                                                <td className="py-2 px-4 border-b">
                                                    {client.city}
                                                </td>
                                                <td className="py-2 px-4 border-b">
                                                    <div className="flex space-x-2">
                                                        <Link
                                                            href={route(
                                                                "clients.show",
                                                                client.id
                                                            )}
                                                            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                                        >
                                                            View
                                                        </Link>
                                                        <Link
                                                            href={route(
                                                                "clients.edit",
                                                                client.id
                                                            )}
                                                            className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                                                        >
                                                            Edit
                                                        </Link>
                                                        <button
                                                            onClick={() =>
                                                                deleteClient(
                                                                    client.id
                                                                )
                                                            }
                                                            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        {clients.length === 0 && (
                                            <tr>
                                                <td
                                                    colSpan="5"
                                                    className="py-4 text-center"
                                                >
                                                    No clients found
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
