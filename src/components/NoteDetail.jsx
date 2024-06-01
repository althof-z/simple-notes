import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/index";
import DeleteButton from "./DeleteButton";

function NoteDetail({ title, createdAt, body, id }) {
  const formattedDate = showFormattedDate(createdAt);

  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{formattedDate}</p>
      <div className="detail-page__body">{body}</div>
      <div className="detail-page__action">
        <DeleteButton id={id} />
      </div>
    </section>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default NoteDetail;
