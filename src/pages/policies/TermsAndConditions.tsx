// pages/TermsAndConditions.tsx
export const TermsAndConditions = () => {
  return (
    <div className="relative flex wrapper">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
        <p className="mb-4">
          Welcome to <strong>E-Invyt</strong>. By using our website/app, you agree to the
          following terms:
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Use of Services</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Products are for personal wedding use only.</li>
          <li>Users must provide accurate details.</li>
          <li>Uploaded content must not violate copyrights.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">Orders & Payments</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Payments are processed securely via PayHere.</li>
          <li>
            Once delivered, digital products are non-refundable (except as per our Refund Policy).
          </li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">Intellectual Property</h2>
        <p className="mb-4">
          All templates, designs, and software belong to <strong>E-Invyt</strong>.
          Redistribution is prohibited.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Limitation of Liability</h2>
        <p className="mb-4">
          We are not responsible for internet/payment delays or indirect damages.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Governing Law</h2>
        <p>
          These terms are governed by the laws of Sri Lanka. For disputes, please contact{' '}
          <strong>einvyt@gmail.com</strong>.
        </p>
      </div>
    </div>
  );
};
