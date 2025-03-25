import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Edit({ auth, client }) {
    const { data, setData, post, processing, errors } = useForm({
        name: client.name || "",
        is_project: client.is_project || "0",
        self_capture: client.self_capture || "1",
        client_prefix: client.client_prefix || "",
        client_logo: null,
        address: client.address || "",
        phone_number: client.phone_number || "",
        city: client.city || "",
        _method: "PUT",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("clients.update", client.id));
    };

    const handleFileChange = (e) => {
        setData("client_logo", e.target.files[0]);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Client
                </h2>
            }
        >
            <Head title="Edit Client" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <InputLabel htmlFor="name" value="Name" />
                                    <TextInput
                                        id="name"
                                        type="text"
                                        className="mt-1 block w-full"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mb-4">
                                    <InputLabel
                                        htmlFor="client_prefix"
                                        value="Client Prefix"
                                    />
                                    <TextInput
                                        id="client_prefix"
                                        type="text"
                                        className="mt-1 block w-full"
                                        value={data.client_prefix}
                                        onChange={(e) =>
                                            setData(
                                                "client_prefix",
                                                e.target.value
                                            )
                                        }
                                        required
                                        maxLength={4}
                                    />
                                    <InputError
                                        message={errors.client_prefix}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mb-4">
                                    <InputLabel
                                        htmlFor="is_project"
                                        value="Is Project"
                                    />
                                    <select
                                        id="is_project"
                                        className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                        value={data.is_project}
                                        onChange={(e) =>
                                            setData(
                                                "is_project",
                                                e.target.value
                                            )
                                        }
                                        required
                                    >
                                        <option value="0">No</option>
                                        <option value="1">Yes</option>
                                    </select>
                                    <InputError
                                        message={errors.is_project}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mb-4">
                                    <InputLabel
                                        htmlFor="self_capture"
                                        value="Self Capture"
                                    />
                                    <select
                                        id="self_capture"
                                        className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                        value={data.self_capture}
                                        onChange={(e) =>
                                            setData(
                                                "self_capture",
                                                e.target.value
                                            )
                                        }
                                        required
                                    >
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                    <InputError
                                        message={errors.self_capture}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mb-4">
                                    <InputLabel
                                        htmlFor="client_logo"
                                        value="Client Logo"
                                    />
                                    {client.client_logo !== "no-image.jpg" && (
                                        <div className="mb-2">
                                            <p className="text-sm text-gray-600">
                                                Current logo:{" "}
                                                {client.client_logo}
                                            </p>
                                        </div>
                                    )}
                                    <input
                                        id="client_logo"
                                        type="file"
                                        className="mt-1 block w-full"
                                        onChange={handleFileChange}
                                    />
                                    <InputError
                                        message={errors.client_logo}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mb-4">
                                    <InputLabel
                                        htmlFor="address"
                                        value="Address"
                                    />
                                    <textarea
                                        id="address"
                                        className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                        value={data.address}
                                        onChange={(e) =>
                                            setData("address", e.target.value)
                                        }
                                        rows={3}
                                    ></textarea>
                                    <InputError
                                        message={errors.address}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mb-4">
                                    <InputLabel
                                        htmlFor="phone_number"
                                        value="Phone Number"
                                    />
                                    <TextInput
                                        id="phone_number"
                                        type="text"
                                        className="mt-1 block w-full"
                                        value={data.phone_number}
                                        onChange={(e) =>
                                            setData(
                                                "phone_number",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.phone_number}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="city" value="City" />
                                    <TextInput
                                        id="city"
                                        type="text"
                                        className="mt-1 block w-full"
                                        value={data.city}
                                        onChange={(e) =>
                                            setData("city", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.city}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="flex items-center justify-between mt-6">
                                    <Link
                                        href={route("clients.index")}
                                        className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                                    >
                                        Cancel
                                    </Link>
                                    <PrimaryButton
                                        type="submit"
                                        disabled={processing}
                                    >
                                        Update Client
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
