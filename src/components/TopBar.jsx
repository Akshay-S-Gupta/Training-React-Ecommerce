export default function TopBar() {
  return (
    <div className="border-bottom py-2 small">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <span className="text-danger d-inline-flex align-items-center justify-content-center rounded-circle bg-light-subtle" style={{width:28,height:28}}>
            <svg width="16" height="16" viewBox="0 0 24 24"><use xlinkHref="#phone" /></svg>
          </span>
          <span className="fw-semibold">12345-67-8910</span>
        </div>
        <ul className="list-unstyled d-flex flex-wrap gap-3 justify-content-center justify-content-md-end mb-0">
          <li><a href="#" className="text-dark"><svg width="18" height="18" viewBox="0 0 24 24"><use xlinkHref="#facebook" /></svg></a></li>
          <li><a href="#" className="text-dark"><svg width="18" height="18" viewBox="0 0 24 24"><use xlinkHref="#twitter" /></svg></a></li>
          <li><a href="#" className="text-dark"><svg width="18" height="18" viewBox="0 0 24 24"><use xlinkHref="#youtube" /></svg></a></li>
          <li><a href="#" className="text-dark"><svg width="18" height="18" viewBox="0 0 24 24"><use xlinkHref="#pinterest" /></svg></a></li>
          <li><a href="#" className="text-dark"><svg width="18" height="18" viewBox="0 0 24 24"><use xlinkHref="#instagram" /></svg></a></li>
        </ul>
      </div>
    </div>
  );
}


