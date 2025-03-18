

const sales = [
        {
            "id": 1,
            "date": "2025-03-15",
            "customer": "John Doe",
            "items": [
                {
                    "product": "Laptop",
                    "quantity": 1,
                    "price": 1200
                },
                {
                    "product": "Mouse",
                    "quantity": 1,
                    "price": 25
                }
            ],
            "total": 1225,
            "paymentMethod": "Credit Card",
            "status": "Completed"
        },
        {
            "id": 2,
            "date": "2025-03-14",
            "customer": "Jane Smith",
            "items": [
                {
                    "product": "Smartphone",
                    "quantity": 2,
                    "price": 800
                }
            ],
            "total": 1600,
            "paymentMethod": "PayPal",
            "status": "Pending"
        },
        {
            "id": 3,
            "date": "2025-03-13",
            "customer": "Robert Johnson",
            "items": [
                {
                    "product": "Tablet",
                    "quantity": 1,
                    "price": 500
                },
                {
                    "product": "Headphones",
                    "quantity": 1,
                    "price": 100
                }
            ],
            "total": 600,
            "paymentMethod": "Debit Card",
            "status": "Completed"
        }
    ]
    
    // console.log(sales.length);
    // console.log(sales[0].customer);
    //total customers :
    //total revenue :
    //total quantity sold :

    let totalCustomers = 0;
    let totalRevenue = 0;
    let totalQuantitySold = 0;

    for (let i = 0; i < sales.length; i++) {
        totalCustomers++;
        totalRevenue += sales[i].total;
        for (let j = 0; j < sales[i].items.length; j++) {
            totalQuantitySold += sales[i].items[j].quantity;
        }
    }

    console.log("Total Customers: " + totalCustomers);
    console.log("Total Revenue: " + totalRevenue);
    console.log("Total Quantity Sold: " + totalQuantitySold);

