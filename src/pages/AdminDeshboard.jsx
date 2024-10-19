import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, CircularProgress, Tabs, Tab, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tabValue, setTabValue] = useState('all');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('https://cab-server.onrender.com/admin/bookings');
      setBookings(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      setLoading(false);
    }
  };

  const updateBookingStatus = async (bookingId, status) => {
    try {
      await axios.put(`https://cab-server.onrender.com/admin/bookings/${bookingId}`, { status });
      fetchBookings();
    } catch (error) {
      console.error('Error updating booking status:', error);
    }
  };

  const renderBookingTable = (bookings) => (
    <Box sx={{ overflowX: 'auto' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell>From</TableCell>
            <TableCell>To</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Car Type</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.map((booking) => (
            <TableRow key={booking._id}>
              <TableCell>{booking.userName}<br />{booking.userPhone}</TableCell>
              <TableCell>{booking.pick.formatted_address}</TableCell>
              <TableCell>{booking.dest.formatted_address}</TableCell>
              <TableCell>{booking.date}</TableCell>
              <TableCell>{booking.time}</TableCell>
              <TableCell>₹{booking.price}</TableCell>
              <TableCell>{booking.carType["Car Model"]}</TableCell>
              <TableCell>{booking.status}</TableCell>
              <TableCell>
                {booking.status === 'pending' && (
                  <>
                    <Button variant="contained" color="primary" onClick={() => updateBookingStatus(booking._id, 'completed')} sx={{ mb: 1 }}>Complete</Button>
                    <Button variant="contained" color="secondary" onClick={() => updateBookingStatus(booking._id, 'cancelled')}>Cancel</Button>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2, py: 4 }}>
      <Typography variant={isMobile ? 'h5' : 'h4'} sx={{ fontWeight: 'bold', mb: 4 }}>Admin Dashboard</Typography>
      <Box>
        <Tabs
          value={tabValue}
          onChange={(e, value) => setTabValue(value)}
          aria-label="booking tabs"
          variant={isMobile ? 'scrollable' : 'fullWidth'}
          scrollButtons={isMobile ? 'auto' : false}
        >
          <Tab label="All Bookings" value="all" />
          <Tab label="Pending Bookings" value="pending" />
          <Tab label="Completed Bookings" value="completed" />
          <Tab label="Cancelled Bookings" value="cancelled" />
        </Tabs>

        <Box sx={{ mt: 4 }}>
          {tabValue === 'all' && renderBookingTable(bookings)}
          {tabValue === 'pending' && renderBookingTable(bookings.filter(booking => booking.status === 'pending'))}
          {tabValue === 'completed' && renderBookingTable(bookings.filter(booking => booking.status === 'completed'))}
          {tabValue === 'cancelled' && renderBookingTable(bookings.filter(booking => booking.status === 'cancelled'))}
        </Box>
      </Box>
    </Box>
  );
}
