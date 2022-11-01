import StarItem from "./StarItem"

const newArray = (length) => [...Array(length)]

function StarList({totalStars = 5, rating, onRate = f => f}) {

  return (
    newArray(totalStars).map((star, i) =>
        <StarItem
            key={i}
            index={i}
            rating={rating}
            onRate={onRate}
        />
    )
  )
}

export default StarList