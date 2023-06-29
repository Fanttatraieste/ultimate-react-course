export default function Stats({ items }) {
  const numItems = items.length;
  const numOfPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numOfPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        👌 You have {numItems} items on your list, and you already packed{' '}
        {numOfPacked} ~ ({percentage}%)
      </em>
    </footer>
  );
}
