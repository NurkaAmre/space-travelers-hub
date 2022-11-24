import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RetrieveMission } from '../../redux/Mission/mission';
import Mission from './mission';


const Missions = () => {
    const missionItems = useSelector((state) => state.mission);
    console.log(missionItems);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(RetrieveMission());
    }, [dispatch]);

    return (
        <div className='container mt-5 pt-5 '>
            <table className="table  table-striped">
                <thead>
                    <tr>
                        <th scope="col">Mission</th>
                        <th scope="col" className='w-50'>Description</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {missionItems.map(item => (
                        <Mission key={item.id} name={item.mission_name} desc={item.description} status="Not a member" />
                    ))}

                </tbody>

            </table>
        </div>

    );

}

export default Missions;
