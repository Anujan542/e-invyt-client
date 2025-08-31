import { Loader2 } from 'lucide-react';
import { UseColumns, type Payment } from './Column';
import { DataTable } from './data-table';
import { getOrderDetails } from '@/api/customization';
import { useQuery } from '@tanstack/react-query';

const OrderContainer = () => {
  const columns = UseColumns();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const res = await getOrderDetails();
      return res.data; // return only the data part
    },
    retry: false,
    refetchOnWindowFocus: false,
  });

  if (isLoading)
    return (
      <div className="col-span-full flex items-center justify-center h-72">
        <Loader2 className="animate-spin w-10 h-10 text-gray-600" />
      </div>
    );
  if (isError) return <div>Failed to load orders.</div>;

  return (
    <div className="flex-1 wrapper">
      <DataTable columns={columns} data={data.message as Payment[]} />
    </div>
  );
};

export default OrderContainer;
