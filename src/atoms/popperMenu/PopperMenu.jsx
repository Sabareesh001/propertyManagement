import { ClickAwayListener, Divider, Grow, MenuItem, MenuList, Paper, Popper } from '@mui/material';
import './PopperMenu.css';


const  PopperMenu = ({menuOptions,anchorRef,isMenuOpen,handleClose})=>{
    return(
        
        <Popper
          transition
          anchorEl={anchorRef ? anchorRef.current : null}
          open={isMenuOpen}
          placement="right"
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    sx={{
                      border:'solid rgba(128, 128, 128, 0.253) 0.5px',
                      borderRadius:'5px'
                    }}
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                  >
                    {menuOptions?.map((data, i) => {
                      return (
                        <>
                          <MenuItem
                            sx={{
                              fontSize: "12px",
                              padding: "0px 10px",
                              color: "#4E5A6B",
                            }}
                            onClick={handleClose}
                          >
                            <div>{data.name}</div>
                          </MenuItem>
                          {i < menuOptions.length - 1 ?
                           <Divider sx={{padding:'0px',margin:'0px 10px'}} /> : null}
                        </>
                      );
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
    )
}

export default  PopperMenu;