export default function GoogleFormEmbed() {
    return (
      <section className="max-w-3xl mx-auto my-12 p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScs4wx_LvW6pukB2spSxHn8o3Ef69GFvfrmQVDVAw2vTrqEXw/viewform?embedded=true"
          width="100%"
          height="600"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Arts for Change Newsletter Form"
        >
          Loading…
        </iframe>
      </section>
    );
  }
  