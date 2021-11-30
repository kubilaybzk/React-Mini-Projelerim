const handleValue = (e) => {
if (e.target.classList.contains('icon')) {
const newValue = e.target.dataset.label
setTitle(newValue)
setValue(person[newValue])
}
}

<button className="icon" data-label="phone" onMouseOver={handleValue}>

İconlara ulaşıyoruz.
