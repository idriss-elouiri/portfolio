// ReviewsSection.jsx
import React from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa";

const ReviewsSection = () => {
  const reviews = [
    {
      client: "Jubair S",
      reviewAr: "رجل محترم وانسان خلوق اتعبته معي ولم يرد لي طلب",
      reviewEn: "A respectful and kind person. I bothered him a lot, yet he fulfilled all my requests.",
    },
    {
      client: "Shahada A",
      reviewAr: "شكرا لك",
      reviewEn: "Thank you.",
    },
    {
      client: "احمد ع.",
      reviewAr: "الله يعطيك العافية شاب خلوق وصبور وينفذلك العمل علي اكمل وجه بارك الله فيك",
      reviewEn: "May God bless you. You're polite, patient, and deliver perfect work. God bless you.",
    },
  ];

  return (
    <section className="reviews-section">
      <h2 className="section-title">Customer Reviews⭐</h2>
      <div className="reviews-grid">
        {reviews.map((rev, idx) => (
          <div className="review-card" key={idx}>
            <div className="review-header">
              <h3>{rev.client}</h3>
            </div>
            <div className="review-stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <ul className="review-tags">
              <li><FaCheckCircle /> جودة الخدمة</li>
              <li><FaCheckCircle /> التواصل والمتابعة</li>
              <li><FaCheckCircle /> التسليم بالموعد</li>
            </ul>
            <p className="review-ar">{rev.reviewAr}</p>
            <p className="review-en">"{rev.reviewEn}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
