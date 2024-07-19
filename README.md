# Hall Booking System

This project is a Hall Booking System built using Node.js and Express.js. The system allows users to manage halls and their bookings. Below is a brief explanation of what the project does and how it works.

## Project Overview

The Hall Booking System provides a simple interface to:

1. **View Details of All Halls**: Get information about the available halls, including their name, seating capacity, price, and amenities.
2. **View All Bookings**: Retrieve all existing bookings for the halls.
3. **Add a New Hall**: Add a new hall to the system with details like name, seating capacity, and amenities.
4. **Book a Room**: Make a booking for a specific hall by providing user details and booking times.
5. **View Booked Halls**: Get a list of halls along with their booking details.
6. **View User Bookings**: Retrieve bookings made by users.
7. **View Bookings by Customer Name**: Get bookings for a specific customer by their name.

## How It Works

### Viewing Hall Details

The system stores hall details in an array. When you request to view hall details, it simply sends this array as a response.

### Viewing All Bookings

Similar to hall details, all bookings are stored in an array. A request to view all bookings returns this array.

### Adding a New Hall

When a new hall is added, the system t
