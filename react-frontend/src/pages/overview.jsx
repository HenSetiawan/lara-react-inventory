/* eslint-disable no-unused-vars */
import { useState } from "react";
import Chart from "react-apexcharts";

function Overview() {
      const [series, setSeries] = useState([
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ]);

      const [options, setOptions] = useState({
        chart: {
          height: 350,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      });
  return (
    <div>
      <div className="container px-4 mt-10">
        <div className="md:flex gap-6">
          <div className="shadow border hover:border-sky-500 w-full md:w-1/4 p-6 bg-white rounded-lg text-center">
            <p className="text-slate-500">Products</p>
            <h3 className="font-bold text-3xl">60</h3>
          </div>
          <div className="shadow border hover:border-sky-600 w-full md:w-1/4 p-6 bg-white rounded-lg text-center">
            <p className="text-slate-500">Admins</p>
            <h3 className="font-bold text-3xl">16</h3>
          </div>
          <div className="shadow border hover:border-sky-600 w-full md:w-1/4 p-6 bg-white rounded-lg text-center">
            <p className="text-slate-500">Suppliers</p>
            <h3 className="font-bold text-3xl">43</h3>
          </div>
          <div className="shadow border hover:border-sky-600 w-full md:w-1/4 p-6 bg-white rounded-lg text-center">
            <p className="text-slate-500">Admins</p>
            <h3 className="font-bold text-3xl">64</h3>
          </div>
        </div>
      </div>
      <div className="md:flex w-full px-4 mt-10">
        <div className="bg-white p-6 md:w-2/3 shadow w-full">
          <div className="">
            <h3 className="font-semibold">Todays Dummy Data</h3>
            <p className="text-sm text-slate-500">18 Oktober 2023</p>
          </div>
          <div className="block w-full">
            <Chart options={options} series={series} type="area" height={350} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
