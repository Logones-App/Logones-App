"use client"
import React, { useEffect, useMemo, useState } from 'react'
import { connect } from 'react-redux';
import  * as switcherdata from '../../shared/data/switcherdata/switcherdata';
import { ThemeChanger } from '@/shared/redux/action';

function Layout({children, local_varaiable, ThemeChanger}:any) {
  const customstyles :any= {
    ...(local_varaiable.colorPrimaryRgb !== '' && { '--primary-rgb': local_varaiable.colorPrimaryRgb }),
    ...(local_varaiable.colorPrimary !== '' && { '--primary': local_varaiable.colorPrimary }),
    ...(local_varaiable.bodyBg !== '' && { '--body-bg-rgb': local_varaiable.bodyBg }),
    ...(local_varaiable.darkBg !== '' && { '--body-bg-rgb2': local_varaiable.darkBg }),
    ...(local_varaiable.inputBorder !== '' && { '--input-border': `rgba(${local_varaiable.inputBorder})` }),
    ...(local_varaiable.formControlBg != '' && {'--form-control-bg':`rgb(${local_varaiable.bodyBg})`}),
    ...(local_varaiable.Light !== '' && { '--light-rgb': local_varaiable.bodyBg }),
  };
  const [pageloading , setpageloading] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      
      switcherdata.LocalStorageBackup(ThemeChanger, setpageloading);
    }
   
  }, []);
  return (
    <>
         <html
            suppressHydrationWarning={true} 
            dir={local_varaiable.dir}
            data-theme-mode={local_varaiable.dataThemeMode}
            data-header-styles={local_varaiable.dataHeaderStyles}
            data-vertical-style={local_varaiable.dataVerticalStyle}
            data-nav-layout={local_varaiable.dataNavLayout}
            data-menu-styles={local_varaiable.dataMenuStyles}
            data-toggled={local_varaiable.dataToggled}
            data-nav-style={local_varaiable.dataNavStyle}
            hor-style={local_varaiable.horStyle}
            data-page-style={local_varaiable.dataPageStyle}
            data-width={local_varaiable.dataWidth}
            data-menu-position={local_varaiable.dataMenuPosition}
            data-header-position={local_varaiable.dataHeaderPosition}
            data-icon-overlay={local_varaiable.iconOverlay}
            data-bg-img={local_varaiable.bgImg}
            data-icon-text={local_varaiable.iconText}

            //Styles
            style={customstyles}>
              <head>
              <link href="https://cdn.jsdelivr.net/npm/dragula@3.7.3/dist/dragula.min.css" rel="stylesheet"/>
              <meta name="keywords" content="nextjs template,nextjs admin template,admin,nextjs dashboard template,app router,router admin,admin panel template,dashboard,admin template,firebase nextjs,typescript,next js typescript,react bootstrap component,admin dashboard template,reactbootstrap" />
              </head>
             <body className={`${local_varaiable.body ? local_varaiable.body : ''}`}>
              { pageloading && children}
              <script src="https://cdn.jsdelivr.net/npm/dragula@3.7.3/dist/dragula.min.js"></script>
             </body>
          </html>
    </>
  )
}

const mapStateToProps = (state: any) => ({
  local_varaiable: state
});

export default connect(mapStateToProps, {ThemeChanger})(Layout);