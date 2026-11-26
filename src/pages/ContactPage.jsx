import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, ShieldCheck, Sparkles } from 'lucide-react';
import { useCMS } from '../context/CMSContext';

export const ContactPage = () => {
  const { submitInquiry } = useCMS();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Private Gallery Viewing',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    await submitInquiry({
      name: formData.name,
      email: formData.email,
      interest: formData.interest,
      message: formData.message || 'I would like to schedule a private gallery viewing appointment.'
    });

    setSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#F4F2EE] text-[#171717] pt-32 pb-24 border-b border-[#D8D4CE]">
      <div className="max-w-content mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 pb-8 border-b border-[#D8D4CE]">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#A14F39] block mb-2">
            PRIVATE ATELIER COMMISSIONS
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-[#171717]">
            Acquisitions & Viewings.
          </h1>
          <p className="mt-3 text-base text-[#74716C]">
            Schedule a private appointment at our Copenhagen Gallery or Tokyo Atelier.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Gallery Locations & Information (Left) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl bg-white border border-[#D8D4CE] p-8 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-mono text-[#A14F39] uppercase font-bold block mb-1">
                  COPENHAGEN GALLERY
                </span>
                <h3 className="text-xl font-bold text-[#171717]">
                  Bredgade 42
                </h3>
                <p className="text-xs text-[#74716C] mt-1 leading-relaxed">
                  1260 København K, Denmark<br />
                  Tuesday – Saturday · By Private Appointment
                </p>
                <div className="mt-3 text-xs font-mono text-[#171717]">
                  cph@mono-objects.design
                </div>
              </div>

              <div className="pt-6 border-t border-[#D8D4CE]">
                <span className="text-xs font-mono text-[#A14F39] uppercase font-bold block mb-1">
                  TOKYO ATELIER
                </span>
                <h3 className="text-xl font-bold text-[#171717]">
                  Minami-Aoyama Pavilion
                </h3>
                <p className="text-xs text-[#74716C] mt-1 leading-relaxed">
                  5-7-22 Minamiaoyama, Minato-ku, Tokyo<br />
                  Wednesday – Sunday · By Private Appointment
                </p>
                <div className="mt-3 text-xs font-mono text-[#171717]">
                  tokyo@mono-objects.design
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#171717] text-white">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A14F39] block mb-1">
                COMMISSION RUNS
              </span>
              <p className="text-xs text-[#A8A7A4] leading-relaxed">
                Standard commission lead time is 6–8 weeks. Custom dimensions or bespoke bronze patinas can be coordinated directly with our foundry team.
              </p>
            </div>
          </div>

          {/* Inquiry Form (Right) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-[#D8D4CE] p-8 sm:p-12 shadow-sm">
              <h3 className="text-2xl font-bold text-[#171717] mb-2">
                Appointment & Commission Request
              </h3>
              <p className="text-xs text-[#74716C] mb-8">
                Please complete the curatorial dossier below. Our gallery director will confirm availability.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#F4F2EE] border border-[#D8D4CE] text-center">
                  <ShieldCheck className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-[#171717]">Dossier Received</h4>
                  <p className="text-xs text-[#74716C] max-w-sm mx-auto mt-2 leading-relaxed">
                    Thank you. A gallery associate will reach out to you within one business day with appointment details.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2 rounded-full border border-[#D8D4CE] text-xs font-mono hover:border-[#171717]"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-[#74716C] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Henrik Lindqvist"
                        className="w-full px-4 py-3 rounded-xl border border-[#D8D4CE] text-xs font-mono bg-[#F4F2EE] focus:bg-white focus:outline-none focus:border-[#A14F39]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#74716C] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="henrik@architecture.dk"
                        className="w-full px-4 py-3 rounded-xl border border-[#D8D4CE] text-xs font-mono bg-[#F4F2EE] focus:bg-white focus:outline-none focus:border-[#A14F39]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#74716C] mb-1.5">
                      Nature of Request
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D8D4CE] text-xs font-mono bg-[#F4F2EE] focus:bg-white focus:outline-none focus:border-[#A14F39]"
                    >
                      <option value="Private Gallery Viewing">Private Gallery Viewing Appointment</option>
                      <option value="Acquisition of MONO 001">Acquisition of MONO 001 Lounge Chair</option>
                      <option value="Acquisition of MONO 004 Table">Acquisition of MONO 004 Dining Table</option>
                      <option value="Architectural Commission">Architectural Residence Commission</option>
                      <option value="CAD / BIM Dossier Request">Architectural CAD / BIM Dossier Request</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#74716C] mb-1.5">
                      Notes / Architectural Details
                    </label>
                    <textarea
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Preferred gallery location, project timeline, or specific material questions..."
                      className="w-full px-4 py-3 rounded-xl border border-[#D8D4CE] text-xs font-mono bg-[#F4F2EE] focus:bg-white focus:outline-none focus:border-[#A14F39]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#171717] text-white text-xs font-medium hover:bg-black transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>Submit Gallery Dossier</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactPage;
