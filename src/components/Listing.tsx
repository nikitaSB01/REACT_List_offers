import React from "react";

export interface ListingItem {
  listing_id: number;
  url: string;
  MainImage: { url_570xN: string };
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}

interface ListingProps {
  items: ListingItem[];
}

const Listing: React.FC<ListingProps> = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img src={item.MainImage.url_570xN} alt={item.title} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">
              {item.title.length > 50
                ? `${item.title.slice(0, 50)}…`
                : item.title}
            </p>
            <p className="item-price">
              {item.currency_code === "USD" && `$${item.price}`}
              {item.currency_code === "EUR" && `€${item.price}`}
              {item.currency_code !== "USD" &&
                item.currency_code !== "EUR" &&
                `${item.currency_code} ${item.price}`}
            </p>
            <p
              className={`item-quantity ${
                item.quantity <= 10
                  ? "level-low"
                  : item.quantity <= 20
                  ? "level-medium"
                  : "level-high"
              }`}
            >
              {item.quantity} left
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;
