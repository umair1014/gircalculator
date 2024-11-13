import React from 'react';

export function Content() {
  return (
    <div className="max-w-4xl mx-auto prose prose-blue">
      <section id="about" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a GIR Calculator?</h2>
        <p className="text-gray-700">
          A GIR Calculator (Glucose Infusion Rate Calculator) is a tool used to determine the rate at which glucose is infused into the body, typically for patients who need controlled blood sugar levels, like those in intensive care units or with specific metabolic conditions. This calculator is particularly useful in medical settings to help health professionals keep glucose levels stable, ensuring patients get just the right amount to meet their needs without risks of low or high blood sugar.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Use the GIR Calculator: Key Inputs and Variables</h3>
        <p className="text-gray-700">
          To calculate the GIR accurately, the following inputs are generally required:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Patient's Weight (in kilograms):</strong> Knowing the exact weight is crucial since glucose needs are based on body mass.</li>
          <li><strong>Glucose Solution Concentration (in %):</strong> This reflects the percentage of glucose in the IV solution, such as a 5% or 10% solution.</li>
          <li><strong>Infusion Rate (in mL/hr):</strong> The rate at which glucose is administered per hour.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why is GIR Important in Patient Care?</h3>
        <p className="text-gray-700">
          Maintaining a balanced glucose infusion rate is essential for:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Preventing Hypoglycemia or Hyperglycemia</li>
          <li>Supporting Metabolic Needs</li>
          <li>Avoiding Complications</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">GIR Calculator Formula</h3>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <p className="text-blue-800 font-mono">
            GIR = (Concentration of glucose in the solution * Infusion Rate) / (Weight of patient * 6)
          </p>
        </div>
      </section>

      <section id="faq" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">1. What is the GIR Calculator used for?</h3>
            <p className="text-gray-700">The GIR Calculator is used to determine the glucose infusion rate (GIR) needed for a patient. It helps healthcare professionals manage blood glucose levels accurately, particularly for patients who need careful monitoring in medical settings like hospitals.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">2. How does the GIR Calculator work?</h3>
            <p className="text-gray-700">The calculator uses three main inputs: the patient's weight, the concentration of the glucose solution, and the infusion rate. By entering these values, the calculator provides a tailored glucose infusion rate that suits the patient's needs.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">3. Why is the glucose infusion rate (GIR) important in healthcare?</h3>
            <p className="text-gray-700">GIR is crucial because it helps maintain safe blood glucose levels in patients who may have difficulty regulating their own levels, such as those in critical care. It prevents hypoglycemia and hyperglycemia, reducing risks and supporting recovery.</p>
          </div>
        </div>
      </section>
    </div>
  );
}