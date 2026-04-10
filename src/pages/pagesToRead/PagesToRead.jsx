import React, { useContext, useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
} from "recharts";
import { BookContext } from "../../context/BookContextProvider";

const COLORS = [
  "#0085F6",
  "#00C29C",
  "#FBB929",
  "#FC8042",
  "#FB0100",
  "#00ADB5",
  "#0984E3",
  "#A29BFE",
];

const TriangleBar = (props) => {
  const { x, y, width, height, index } = props;
  if (x == null || y == null || width == null || height == null) return null;

  const fill = COLORS[index % COLORS.length];

  const path = `M${x},${y + height}
    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height}
    Z`;

  return <path d={path} fill={fill} stroke="none" />;
};

const renderLabel = (props) => {
  const { x, y, width, value, index } = props;
  if (!x || !y) return null;

  return (
    <text
      x={x + width / 2}
      y={y - 8}
      fill={COLORS[index % COLORS.length]}
      fontSize={12}
      fontWeight="bold"
      textAnchor="middle"
    >
      {value}
    </text>
  );
};

const PagesToRead = () => {
  const { readList } = useContext(BookContext);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1024); // Rotate labels on tablet & mobile
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="w-full min-h-[90vh] flex justify-center items-center py-8 px-4 ">
      <div className="w-full max-w-6xl">
        {/* Chart Container */}
        <div className="w-full bg-gray-50 rounded-2xl shadow-sm p-4 md:p-8 lg:p-10">
          <div className="w-full h-[480px] md:h-[550px] lg:h-[620px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={readList}
                margin={{
                  top: 30,
                  right: 20,
                  left: 10,
                  bottom: isSmallScreen ? 100 : 60, // Extra space for rotated labels
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

                <XAxis
                  dataKey="bookName"
                  angle={isSmallScreen ? -45 : 0} // Rotate on tablet + mobile
                  textAnchor={isSmallScreen ? "end" : "middle"}
                  fontSize={isSmallScreen ? 11 : 12}
                  height={isSmallScreen ? 100 : 60}
                  interval={0} // Show all book names
                />

                <YAxis />
                <Tooltip />

                <Bar dataKey="totalPages" shape={TriangleBar}>
                  <LabelList content={renderLabel} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagesToRead;
