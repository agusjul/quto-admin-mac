import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import {
	Drawer,
	DrawerOverflow,
	DrawerToC,
	DrawerToggle,
} from 'react-bootstrap-drawer';

import CustomNavigation from './CustomNavigation';

const CustomDrawer = (props) => {
	const [open, setOpen] = useState(false);

	const handleToggle = () => setOpen(!open);

	return (
		<Drawer className={ props.className } >
            {console.log(props)}
            <div style={{display : 'flex', justifyContent : 'space-around', alignItems :'center'}}>
                <div style={{padding : 20}}>
                    Quto Admin
                </div>
                <DrawerToggle onClick={ handleToggle } />
            </div>

			<Collapse in={ open }>
				<DrawerOverflow>
					<DrawerToC>
						{ /* Your Navigation Goes Here */ }
						<CustomNavigation />
					</DrawerToC>
				</DrawerOverflow>
			</Collapse>
		</Drawer>
	);
};

export default CustomDrawer;