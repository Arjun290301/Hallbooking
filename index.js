const express=require("express")
const port=process.env.port||3002
const app=express() 
app.use(express.json())
let hall=[
    {roomId:1,name:"hall1",seats:100,price:100,amenities:"AC"},
    {roomId:2,name:"hall2",seats:50,price:50,amenities:"AC"},
    {roomId:3,name:"hall3",seats:75,price:75,amenities:"AC"},
    {roomId:4,name:"hall4",seats:100,price:90,amenities:"Non-AC"},
    {roomId:5,name:"hall5",seats:50,price:40,amenities:"Non-AC"},
  
]
let bookings=[
    {bookingId:1,userName:"Arjun",Date:"12/03/2024",startTime:"9:30AM",endTime:"5:30pm",roomId:2},
    {bookingId:2,userName:"Naveen",Date:"13/03/2024",startTime:"9:30AM",endTime:"5:30pm",roomId:1},
    {bookingId:3,userName:"deva",Date:"14/03/2024",startTime:"9:30AM",endTime:"5:30pm",roomId:3},
]
app.get("/hallDetails",(req,res)=>{
    // res.send("Hall details with price per Hr")
    res.send(hall)
})
app.get("/showBooking",(req,res)=>{
    res.send(bookings)
})
app.post("/insertHall",(req,res)=>{
    const {seats,amenities,name}=req.body
    const newHall={roomId:hall.length+1,seats,amenities,name}
    hall.push(newHall)
    res.send("Hall added")
})
app.post("/roomBooking",(req,res)=>{
    const{userName,date,startTime,endTime,roomId}=req.body
    const booking={bookingId:bookings.length+1,userName,date,startTime,endTime,roomId}
bookings.push(booking)
res.send("Booked succesfully")
})
//////////////////////////////
app.get('/bookedHall', (req, res) => {
    const roomsWithBookings = hall.map(hall => {
      const roomBookings = bookings.filter(bookings => bookings.roomId === hall.roomId);
      return {
        ...hall,
        bookings: roomBookings
      };
    });
    res.json(roomsWithBookings);
  });
//////////////////////////////////
app.get("/userBooked",(req,res)=>{
    const userBooked=bookings.map(bookings=>{
        const bookingDetails=hall.filter(hall=>hall.roomId===bookings.bookingId)
        return{
            ...bookings,
            hall:bookingDetails
        }
    })
    res.json(userBooked);
    //////////////////////////////////////
})

app.get('/customer-bookings/:customerName', (req, res) => {
    const { customerName } = req.params;
    const customerBookings = bookings.filter(booking => booking.userName === customerName);
    res.json(customerBookings);
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})