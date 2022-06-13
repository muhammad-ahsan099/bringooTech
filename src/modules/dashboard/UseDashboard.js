import { useState } from "react"
const UseDashboard = () => {
    const tableData = [
        {
            karatQntty: 22,
            price: '21.125',
        },
        {
            karatQntty: 21,
            price: '20.158',
        },
        {
            karatQntty: 18,
            price: '17.280',
        },
    ];
    const charges = [
        {
            country: 'turkish',
            charges: "6.000",
        },
        {
            country: 'saudi',
            charges: "4.500",
        },
        {
            country: 'singapore',
            charges: "4.500",
        },
        {
            country: 'omani',
            charges: "3.500",
        },
        {
            country: 'emirati',
            charges: "4.500",
        },
        {
            country: 'indian',
            charges: "3.000",
        },
        {
            country: 'bahrain',
            charges: '5.500',
        },
        {
            country: 'khwati',
            charges: '5.500',
        },
    ]
    return [{ tableData, charges }]
}

export default UseDashboard;