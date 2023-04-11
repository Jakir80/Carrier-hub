import { default as React } from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const Rechart = () => {
   const charts= [
        {
            id:1,
            name:"Assignment-1",
            Marks:60,
        },
        {
            id:2,
            name:"Assignment-2",
            Marks:60,
        },
        {
            id:3,
            name:"Assignment-3",
            Marks:58,
        },
        {
            id:4,
            name:"Assignment-4",
            Marks:60,
        },
        {
            id:5,
            name:"Assignment-5",
            Marks:60,
        },
        {
            id:6,
            name:"Assignment-6",
            Marks:58,
        },
        {
            id:7,
            name:"Assignment-7",
            Marks:60,
        },
        {
            id:8,
            name:"Assignment-8",
            Marks:60,
        }
    ]
    return (
        <div>
            <AreaChart
          width={1100}
          height={600}
          data={charts}
       
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Marks" stroke="#8884d8" fill="#8884f9" />
        </AreaChart>
        </div>
    );
};

export default Rechart;