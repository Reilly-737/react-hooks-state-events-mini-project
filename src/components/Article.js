import React from 'react';
const coffeeEmoji = "☕️";
const bentoEmoji = "🍱";

function Article(props) {
    const {title, date, preview } = props;

    const calculateReadTimeEmoji = (minutes) => {
        const coffeeCups = Math.ceil(minutes / 5);
        const bentoBoxes= Math.ceil(minutes / 10);

        const coffeeEmojis = coffeeEmoji.repeat(coffeeCups);
        const bentoEmojis = bentoEmoji.repeat(bentoBoxes);

        return minutes< 30 ? coffeeEmojis : bentoEmojis;
    };

    return (
      <article>
        <h3>{title}</h3>
        <small>{date || "January 1, 1970"}</small>
        {preview && (
          <div>
            {calculateReadTimeEmoji(Math.ceil(preview.length / 5))}{" "}
            {Math.ceil(preview.length / 5)} min read
          </div>
        )}
      </article>
    );
}
export default Article;