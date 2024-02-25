import Button from "../components/Button";
import RecentLogs from "../components/Table/RecentLogs";
import RecentHotel from "../components/Table/RecentHotel";

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
        <RecentHotel />
      </section>

      <section className="my-12">
        <header className="flex items-center justify-between">
          <h2 className="font-bold text-[20px] text-[#1a1c1e]">Recent Logs</h2>
          <Button link="">View All</Button>
        </header>
        <RecentLogs />
      </section>
    </>
  );
};

export default Dashboard;
