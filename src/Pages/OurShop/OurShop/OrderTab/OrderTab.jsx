import MenuCard from '../MenuCard';

const OrderTab = ({items}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:grid-cols-3 lg:gap-3 mb-14">
                        {
                          items.map(item => <MenuCard
                          key={item._id}
                          item = {item}></MenuCard>)
                        }

                    </div>
    );
};

export default OrderTab;