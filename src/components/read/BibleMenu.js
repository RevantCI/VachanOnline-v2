import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 300,
    },
    popover: {
        pointerEvents: 'none',

    },
    paper: {
        padding: theme.spacing(2),
        backgroundColor: "yellow",
        marginRight: "30px"

    },
    button: {
        borderBottom: "1px solid #fff"
    }
}));


export default function BibleMenu() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handlePopoverOpen(event) {
        setAnchorEl(event.currentTarget);
    }

    function handlePopoverClose() {
        setAnchorEl(null);
    }

    const open = Boolean(anchorEl);
    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemIcon className="hvr-grow" aria-owns={open ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}>
                        <i class="material-icons" style={{ fontSize: "38px", color: "#fff" }}>
                            import_contacts</i>
                        <Popover
                            id="mouse-over-popover"
                            className={classes.popover}
                            classes={{
                                paper: classes.paper,
                            }}
                            open={open}
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            onClose={handlePopoverClose}
                            disableRestoreFocus
                        >
                            <Typography>Parallel Bible</Typography>
                        </Popover>

                    </ListItemIcon>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <i className="material-icons" style={{ fontSize: "38px", color: "#fff" }}>comment</i>
                    </ListItemIcon>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <i class="material-icons" style={{ fontSize: "38px", color: "#fff" }}>format_shapes</i>
                    </ListItemIcon>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <i class="material-icons" style={{ fontSize: "40px", color: "#fff" }}>functions</i>
                    </ListItemIcon>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <i class="material-icons" style={{ fontSize: "38px", color: "#fff" }}>videocam</i>
                    </ListItemIcon>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <i class="material-icons" style={{ fontSize: "40px", color: "#fff" }}>image</i>
                    </ListItemIcon>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <i class="material-icons" style={{ fontSize: "38px", color: "#fff" }}>volume_up</i>
                    </ListItemIcon>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <i class="material-icons" style={{ fontSize: "38px", color: "#fff" }}>rate_review</i>
                    </ListItemIcon>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <i class="material-icons" style={{ fontSize: "38px", color: "#fff" }}>sort_by_alpha</i>
                    </ListItemIcon>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <i class="material-icons" style={{ fontSize: "40px", color: "#fff" }}>more_horiz</i>
                    </ListItemIcon>
                </ListItem>


            </List>

        </div >
    );
}
