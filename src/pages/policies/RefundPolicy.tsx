export const RefundPolicy = () => {
  return (
    <div className="relative flex wrapper">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>
        <p className="mb-4">
          Thank you for choosing <strong>E-Invyt</strong> to create your wedding
          invitations and animations. We are committed to delivering high-quality digital products
          that meet your expectations.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Non-Refundable Items</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Customized invitations and animations once delivered.</li>
          <li>Completed digital downloads or templates.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">Refundable Cases</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            Technical issues where the product is not delivered or is unusable due to a verified
            system error.
          </li>
          <li>Duplicate payments or incorrect charges.</li>
        </ul>
        <p className="mb-4">Refund requests must be made within 7 days of purchase.</p>
        <p>
          For refund requests, please contact us at <strong>einvyt@gmail.com</strong>.
        </p>
      </div>
    </div>
  );
};
