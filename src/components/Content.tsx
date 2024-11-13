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
        <p className="text-gray-700">Each of these values influences the overall infusion rate, ensuring it aligns with the patient's energy and metabolic needs.</p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why is GIR Important in Patient Care?</h3>
        <p className="text-gray-700">
          Maintaining a balanced glucose infusion rate is essential for:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Preventing Hypoglycemia or Hyperglycemia:</strong> Ensures the patient's blood sugar level stays within a safe range.</li>
          <li><strong>Supporting Metabolic Needs:</strong> Supplies the body with adequate energy during recovery.</li>
          <li><strong>Avoiding Complications:</strong> Especially in critical care, where a patient's condition can worsen with incorrect glucose levels.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">GIR Calculator Formula</h3>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <p className="text-blue-800 font-mono">
            GIR = (Concentration of glucose in the solution * Infusion Rate) / (Weight of patient * 6)
          </p>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Example Calculation with the GIR Calculator</h3>
        <p className="text-gray-700">Let's say we have:</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Patient Weight: 50 kg</li>
          <li>Glucose Solution Concentration: 10%</li>
          <li>Infusion Rate: 30 mL/hr</li>
        </ul>
        <p className="text-gray-700">Using the formula, we can determine the glucose infusion rate, providing a straightforward way to calculate the necessary GIR for patient care.</p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Use a GIR Calculator?</h3>
        <p className="text-gray-700">This tool can save time and improve accuracy in medical settings. It:</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Simplifies Complex Calculations:</strong> Quickly calculates the infusion rate without manual math.</li>
          <li><strong>Increases Safety:</strong> Helps prevent complications related to glucose administration.</li>
          <li><strong>Enhances Care:</strong> Ensures each patient's glucose needs are met accurately.</li>
        </ul>
      </section>

      <section id="faq" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-900">{index + 1}. {faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="conclusion" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
        <p className="text-gray-700">
          A GIR Calculator is essential in any healthcare setting where glucose management is necessary. It accurately calculates the glucose infusion rate for each patient, ensuring safer and more effective care.
        </p>
      </section>
    </div>
  );
}

const faqs = [
  {
    question: "What is the GIR Calculator used for?",
    answer: "The GIR Calculator is used to determine the glucose infusion rate (GIR) needed for a patient. It helps healthcare professionals manage blood glucose levels accurately, particularly for patients who need careful monitoring in medical settings like hospitals."
  },
  {
    question: "How does the GIR Calculator work?",
    answer: "The calculator uses three main inputs: the patient's weight, the concentration of the glucose solution, and the infusion rate. By entering these values, the calculator provides a tailored glucose infusion rate that suits the patient's needs."
  },
  {
    question: "Why is the glucose infusion rate (GIR) important in healthcare?",
    answer: "GIR is crucial because it helps maintain safe blood glucose levels in patients who may have difficulty regulating their own levels, such as those in critical care. It prevents hypoglycemia (low blood sugar) and hyperglycemia (high blood sugar), reducing risks and supporting recovery."
  },
  {
    question: "Can the GIR Calculator be used for children and adults?",
    answer: "Yes, the GIR Calculator can be used for patients of all ages. However, since children and adults have different glucose requirements, it's important to use the correct patient weight and other relevant values to ensure accurate results."
  },
  {
    question: "What units does the GIR Calculator use?",
    answer: "Typically, the calculator will use kilograms (kg) for weight, milliliters per hour (mL/hr) for infusion rate, and a percentage (%) for glucose concentration. The result is often given in mg/kg/min."
  },
  {
    question: "Do I need any medical background to use the GIR Calculator?",
    answer: "While the calculator is easy to use, it's primarily intended for healthcare professionals who understand the importance of accurate glucose infusion. If you are a patient or caregiver, it's best to consult a healthcare provider for guidance."
  },
  {
    question: "How often should the GIR be calculated?",
    answer: "The GIR should be calculated whenever there is a change in the patient's weight, glucose solution concentration, or infusion rate. Regular checks are important, especially in critical care settings, to adjust as the patient's needs change."
  },
  {
    question: "What are the risks of incorrect GIR calculations?",
    answer: "An incorrect GIR can lead to too much or too little glucose being administered, which may result in complications such as low or high blood sugar levels. Using a GIR Calculator minimizes these risks by improving calculation accuracy."
  },
  {
    question: "Can the GIR Calculator replace a healthcare professional's judgment?",
    answer: "No, the GIR Calculator is a tool to assist professionals but should always be used with clinical judgment. Decisions about glucose infusion should consider the patient's overall condition, not just the calculator results."
  },
  {
    question: "Where can I find a reliable GIR Calculator?",
    answer: "Reliable GIR Calculators are available in medical settings, or you can use reputable online health platforms. Always ensure the tool follows proper medical guidelines for accurate results."
  }
];
