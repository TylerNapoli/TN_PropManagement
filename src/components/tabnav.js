import React, { Component } from 'react';

class TabNav extends Component {
  render() {
    return (
        <div className='tab-nav'>
            <div className='tab-nav__tabs'>
            {
                this.props.tabs.map((tab, index) => {
<<<<<<< HEAD
                    const className = `tab-nav__tab ${tab.active ? 'tab-nav__active' : ''}`
                    return <a key={index} onClick={() => this.props.handleClick(tab.title)} className={className}>{tab.title}</a>
                })
            }
            </div>
            
            {
                this.props.tabs.map((tab, index) => {
                    if(tab.active) {
                        return (
                            <div key={index} className='tab-nav__component'>
                                {tab.component}
                            </div>
                        )
                    }
                })
            }
    
=======
                    return <a className='tab-nav__tab'>{tab.title}</a>
                })
            }
            </div>
            <div>requests or newsletters content goes here</div>
>>>>>>> e5b6c86b88a1ce58214aa38b2dbc97c9230466f4
        </div>
    )
  }
}

<<<<<<< HEAD
export default TabNav;
=======
export default TabNav;
>>>>>>> e5b6c86b88a1ce58214aa38b2dbc97c9230466f4
