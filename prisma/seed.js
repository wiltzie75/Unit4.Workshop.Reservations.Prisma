const prisma = require("../prisma");
const seed = async () => {
    const createCustomers = async () => {
        const customers = [
            { name: "Michael" },
            { name: "Jesse" },
            { name: "Sawa" },
            { name: "Henry" },
        ];
        await prisma.customer.createMany({ data: customers });
    };

    const createRestaurants = async () => {
        const restaurants = [
            { name: "Shalom Japan" },
            { name: "The Lonesome Club" },
            { name: "Cena" },
        ];
        await prisma.restaurant.createMany({ data: restaurants });
    };

    const createReservations = async () => {
        const reservations = [
            { customerId: 1, restaurantId: 1, partyCount: 2, date: new Date("2025-07-01") },
            { customerId: 2, restaurantId: 2, partyCount: 5, date: new Date("2025-07-02") },
            { customerId: 3, restaurantId: 3, partyCount: 3, date: new Date("2025-07-03") },
        ];
        await prisma.reservation.createMany({ data: reservations });
    };

    await createCustomers();
    await createRestaurants();
    await createReservations();

};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });


//   curl -X POST http://localhost:3000/api/customers/1/reservations \
//   -H "Content-Type: application/json" \
//   -d '{"restaurantId": 3, "date": "2025-07-04T19:00:00.000Z", "partyCount": 2}'