import React from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import Battery90OutlinedIcon from '@material-ui/icons/Battery90Outlined';
export const SideBarData = [
    {
        title:'Dashboard',
        icon: <HomeOutlinedIcon />,
        link: '/'
    },
    {
        title:'History',
        icon: <Battery90OutlinedIcon />,
        link: '/history'
    },
    {
        title:'Progress',
        icon: <HomeOutlinedIcon />,
        link: '/progress'
    },
    {
        title:'Schedule',
        icon: <TodayOutlinedIcon />,
        link: '/schedule'
    },
    {
        title:'Settings',
        icon: <SettingsOutlinedIcon />,
        link: '/settings'
    },
    {
        title:'Log Out',
        icon: <ExitToAppOutlinedIcon />,
        link: '/out'
    },
]