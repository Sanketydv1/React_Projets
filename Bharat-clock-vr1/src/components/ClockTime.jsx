function ClockTime() {
  let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();
  return (
    <div>
      <h3 className="lead">
        This is the current: {date} - {time}
      </h3>
    </div>
  );
}
export default ClockTime;
