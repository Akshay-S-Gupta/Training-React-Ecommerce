export default function CartOffcanvas() {
  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="cartCanvas" aria-labelledby="cartCanvasLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="cartCanvasLabel">My Cart</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="list-unstyled small">
          <li className="d-flex gap-3 align-items-start mb-3">
            <img src="/Our_Recipies/post-thumb-1.jpg" className="rounded object-fit-cover" width="64" height="64" alt="Product" />
            <div>
              <div className="fw-semibold">Black Forest Pastry</div>
              <div className="text-muted">Brief description</div>
              <div className="fw-bold">$12</div>
            </div>
          </li>
          <li className="d-flex gap-3 align-items-start mb-3">
            <img src="/Our_Recipies/post-thumb-2.jpg" className="rounded object-fit-cover" width="64" height="64" alt="Product" />
            <div>
              <div className="fw-semibold">Sprinkled Donuts</div>
              <div className="text-muted">Brief description</div>
              <div className="fw-bold">$8</div>
            </div>
          </li>
          <li className="d-flex gap-3 align-items-start mb-3">
            <img src="/Our_Recipies/post-thumb-3.jpg" className="rounded object-fit-cover" width="64" height="64" alt="Product" />
            <div>
              <div className="fw-semibold">Third item</div>
              <div className="text-muted">Brief description</div>
              <div className="fw-bold">$5</div>
            </div>
          </li>
        </ul>
        <div className="d-flex justify-content-between align-items-center border-top pt-3 mt-3">
          <div className="fw-semibold">Total (USD)</div>
          <div className="fw-bold">$25</div>
        </div>
        <button className="btn btn-dark w-100 mt-3">Checkout</button>
      </div>
    </div>
  );
}


