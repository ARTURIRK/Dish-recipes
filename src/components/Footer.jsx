import React from "react";
function Footer() {
  return <footer className="page-footer red darken-4">
  <div className="footer-copyright red darken-4">
    <div className="container">
    © {new Date().getFullYear()} Copyright Text
    <a className="grey-text text-lighten-4 right" href="https://github.com/ARTURIRK" target='_blank' rel='noreferrer'>More Links</a>
    </div>
  </div>
</footer>
}
export {Footer};