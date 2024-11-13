import React, { useState } from 'react';
import { Calculator as CalcIcon, RotateCcw } from 'lucide-react';

interface FormData {
  weight: string;
  concentration: string;
  rate: string;
}

export function Calculator() {
  const [formData, setFormData] = useState<FormData>({
    weight: '',
    concentration: '',
    rate: ''
  });
  const [result, setResult] = useState<number | null>(null);

  const calculateGIR = (e: React.FormEvent) => {
    e.preventDefault();
    const weight = parseFloat(formData.weight);
    const concentration = parseFloat(formData.concentration);
    const rate = parseFloat(formData.rate);

    if (weight && concentration && rate) {
      // GIR = (concentration * rate) / (weight * 6)
      const gir = (concentration * rate) / (weight * 6);
      setResult(Number(gir.toFixed(2)));
    }
  };

  const resetForm = () => {
    setFormData({
      weight: '',
      concentration: '',
      rate: ''
    });
    setResult(null);
  };

  return (
    <div className="max-w-2xl mx-auto mb-12">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="bg-blue-600 p-6 text-white">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <CalcIcon className="h-6 w-6" />
            Calculate Glucose Infusion Rate
          </h2>
          <p className="text-blue-100 mt-1">Enter patient details below</p>
        </div>
        
        <form onSubmit={calculateGIR} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Patient Weight (kg)
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                placeholder="Enter weight"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Glucose Concentration (%)
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.concentration}
                onChange={(e) => setFormData({ ...formData, concentration: e.target.value })}
                placeholder="Enter concentration"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Infusion Rate (mL/hr)
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.rate}
                onChange={(e) => setFormData({ ...formData, rate: e.target.value })}
                placeholder="Enter rate"
              />
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              <CalcIcon className="h-5 w-5" />
              Calculate
            </button>
            
            <button
              type="button"
              onClick={resetForm}
              className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition flex items-center justify-center gap-2"
            >
              <RotateCcw className="h-5 w-5" />
              Reset
            </button>
          </div>
        </form>

        {result !== null && (
          <div className="bg-blue-50 p-6 border-t border-blue-100">
            <h3 className="text-lg font-semibold text-blue-900">Result</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              {result} mg/kg/min
            </p>
            <p className="text-sm text-blue-700 mt-1">
              Glucose Infusion Rate
            </p>
          </div>
        )}
      </div>
    </div>
  );
}