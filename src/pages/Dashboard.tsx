import Button from "../components/Button";
import TableRow from "../components/Table/TableRow";
import TableHeader from "../components/Table/TableHeader";

const HotelHeader = [
  "Hotel Name",
  "Active",
  "Watchlist",
  "Look Out",
  "Location",
  "Actions",
];

const GuestHeader = [
  "Guest Name",
  "Age",
  "Mobile Number",
  "Status",
  "Hotel",
  "Room No",
  "Actions",
];

const hotelData = [
  "New Tajmahal Hotel",
  "443",
  "233",
  "0",
  "Chakbazar, New Delhi, India",
  "...",
];

const guestData = [
  "Nusrat Jahan Nowshin",
  "19",
  "+880 0170 00 22 332",
  "Active",
  "New Tajmahal Hotel",
  "A-10-05",
  "...",
];

const Dashboard = () => {
  return (
    <>
      <section className="my-12">
        <header className="flex items-center justify-between">
          <h2 className="font-bold text-[20px] text-[#1a1c1e]">
            Recent Hotels
          </h2>
          <Button link="">View All</Button>
        </header>
        <section>
          <TableHeader columns={HotelHeader} />
          <TableRow Data={hotelData} />
          <TableRow Data={hotelData} />
          <TableRow Data={hotelData} />
        </section>
      </section>
      <section>
        <header className="flex items-center justify-between">
          <h2 className="font-bold text-[20px] text-[#1a1c1e]">Recent Guest</h2>
          <Button link="">View All</Button>
        </header>
        <TableHeader columns={GuestHeader} />
        <TableRow Data={guestData} />
        <TableRow Data={guestData} />
        <TableRow Data={guestData} />
      </section>
    </>
  );
};

export default Dashboard;
