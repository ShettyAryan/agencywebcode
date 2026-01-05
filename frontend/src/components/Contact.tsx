import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BookingFormData {
  name: string;
  companyName: string;
  goal: string;
  requirement: string;
  date: Date | null;
  timeSlot: string;
  email: string;
  phone: string;
}

export function Contact() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const { register, handleSubmit, formState: { errors }, reset } = useForm<BookingFormData>();

  // Available time slots
  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const onSubmit = async (data: BookingFormData) => {
    // Validate all required fields
    if (!data.name || !data.email || !data.phone || !data.companyName || !data.goal || !data.requirement || !selectedDate || !selectedTimeSlot) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formData = {
        ...data,
        date: format(selectedDate, "yyyy-MM-dd"),
        dateFormatted: format(selectedDate, "MMMM dd, yyyy"),
        timeSlot: selectedTimeSlot,
        datetime: `${format(selectedDate, "yyyy-MM-dd")} ${selectedTimeSlot}`,
      };

      // Send email via EmailJS
      const emailjsServiceId = (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID;
      const emailjsTemplateId = (import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID;
      const emailjsPublicKey = (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY;

      if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
        await emailjs.send(
          emailjsServiceId,
          emailjsTemplateId,
          {
            to_name: data.name,
            company_name: data.companyName,
            goal: data.goal,
            requirement: data.requirement,
            meeting_date: formData.dateFormatted,
            meeting_time: selectedTimeSlot,
            phone_number: data.phone,
            reply_to: data.email,
          },
          emailjsPublicKey
        );
      } else {
        console.warn("EmailJS credentials not configured");
      }

      // Send data to backend for Google Sheets and Calendar
      const apiUrl = (import.meta as any).env?.VITE_API_URL || "http://localhost:3001/api";
      const backendResponse = await fetch(`${apiUrl}/book-meeting`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          companyName: data.companyName,
          email: data.email,
          goal: data.goal,
          requirement: data.requirement,
          date: formData.date,
          timeSlot: selectedTimeSlot,
          phone: data.phone,
        }),
      });

      if (!backendResponse.ok) {
        throw new Error("Failed to save booking");
      }

      setSubmitStatus("success");
      reset();
      setSelectedDate(null);
      setSelectedTimeSlot("");
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-24 md:pt-28 pb-8 md:pb-12 px-4 md:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="border-2 border-[#1f1f1f] rounded-2xl p-3 md:p-4 flex flex-col gap-3 md:gap-4">
          {/* Header */}
          <div className="bg-[#1a1a1a] rounded-xl p-5 md:p-6">
            <h2 className="font-['Roboto_Flex'] font-semibold text-2xl md:text-3xl lg:text-4xl text-[#f9efec] uppercase leading-tight">
              Book a <span className="text-[#1b4bce]">Meeting</span>
            </h2>
            <p className="font-['Roboto_Flex'] text-[#b3b3b2] text-sm md:text-base mt-2">
              Fill out the form below to schedule a meeting with our team.
            </p>
          </div>

          {/* Booking Form */}
          <div className="bg-[#1a1a1a] rounded-xl p-5 md:p-6 lg:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 md:gap-5">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="font-['Roboto_Mono'] text-[#f0f4fd] text-sm md:text-base uppercase">
                  Name *
                </label>
                <input
                  {...register("name", { 
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters"
                    },
                    validate: (value) => value.trim().length > 0 || "Name cannot be empty"
                  })}
                  type="text"
                  className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-lg px-4 py-3 font-['Roboto_Flex'] text-[#f0f4fd] text-sm md:text-base focus:outline-none focus:border-[#1b4bce] transition-colors"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs font-['Roboto_Flex']">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="font-['Roboto_Mono'] text-[#f0f4fd] text-sm md:text-base uppercase">
                  Email *
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                    validate: (value) => value.trim().length > 0 || "Email cannot be empty"
                  })}
                  type="email"
                  className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-lg px-4 py-3 font-['Roboto_Flex'] text-[#f0f4fd] text-sm md:text-base focus:outline-none focus:border-[#1b4bce] transition-colors"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs font-['Roboto_Flex']">{errors.email.message}</p>
                )}
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-2">
                <label className="font-['Roboto_Mono'] text-[#f0f4fd] text-sm md:text-base uppercase">
                  Phone Number *
                </label>
                <input
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/,
                      message: "Invalid phone number",
                    },
                    minLength: {
                      value: 10,
                      message: "Phone number must be at least 10 digits"
                    },
                    validate: (value) => value.trim().length > 0 || "Phone number cannot be empty"
                  })}
                  type="tel"
                  className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-lg px-4 py-3 font-['Roboto_Flex'] text-[#f0f4fd] text-sm md:text-base focus:outline-none focus:border-[#1b4bce] transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs font-['Roboto_Flex']">{errors.phone.message}</p>
                )}
              </div>

              {/* Company Name */}
              <div className="flex flex-col gap-2">
                <label className="font-['Roboto_Mono'] text-[#f0f4fd] text-sm md:text-base uppercase">
                  Company Name *
                </label>
                <input
                  {...register("companyName", { 
                    required: "Company name is required",
                    minLength: {
                      value: 2,
                      message: "Company name must be at least 2 characters"
                    },
                    validate: (value) => value.trim().length > 0 || "Company name cannot be empty"
                  })}
                  type="text"
                  className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-lg px-4 py-3 font-['Roboto_Flex'] text-[#f0f4fd] text-sm md:text-base focus:outline-none focus:border-[#1b4bce] transition-colors"
                  placeholder="Enter your company name"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-xs font-['Roboto_Flex']">{errors.companyName.message}</p>
                )}
              </div>

              {/* Goal */}
              <div className="flex flex-col gap-2">
                <label className="font-['Roboto_Mono'] text-[#f0f4fd] text-sm md:text-base uppercase">
                  Goal *
                </label>
                <textarea
                  {...register("goal", { 
                    required: "Goal is required",
                    minLength: {
                      value: 10,
                      message: "Goal must be at least 10 characters"
                    },
                    validate: (value) => value.trim().length > 0 || "Goal cannot be empty"
                  })}
                  rows={3}
                  className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-lg px-4 py-3 font-['Roboto_Flex'] text-[#f0f4fd] text-sm md:text-base focus:outline-none focus:border-[#1b4bce] transition-colors resize-none"
                  placeholder="What do you want to achieve?"
                />
                {errors.goal && (
                  <p className="text-red-500 text-xs font-['Roboto_Flex']">{errors.goal.message}</p>
                )}
              </div>

              {/* Requirement */}
              <div className="flex flex-col gap-2">
                <label className="font-['Roboto_Mono'] text-[#f0f4fd] text-sm md:text-base uppercase">
                  Requirement *
                </label>
                <textarea
                  {...register("requirement", { 
                    required: "Requirement is required",
                    minLength: {
                      value: 10,
                      message: "Requirement must be at least 10 characters"
                    },
                    validate: (value) => value.trim().length > 0 || "Requirement cannot be empty"
                  })}
                  rows={4}
                  className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-lg px-4 py-3 font-['Roboto_Flex'] text-[#f0f4fd] text-sm md:text-base focus:outline-none focus:border-[#1b4bce] transition-colors resize-none"
                  placeholder="Describe your requirements in detail..."
                />
                {errors.requirement && (
                  <p className="text-red-500 text-xs font-['Roboto_Flex']">{errors.requirement.message}</p>
                )}
              </div>

              {/* Date Picker */}
              <div className="flex flex-col gap-3 md:gap-4">
                <label className="font-['Roboto_Mono'] text-[#f0f4fd] text-sm md:text-base uppercase mb-1">
                  Select Date *
                </label>
                <div className="bg-[#0f0f0f] border-2 border-[#1f1f1f] rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 xl:p-10 calendar-dark hover:border-[#1b4bce] transition-all duration-300 w-full overflow-x-auto">
                  <div className="w-full flex justify-center min-w-[280px]">
                    <Calendar
                      mode="single"
                      selected={selectedDate || undefined}
                      onSelect={(date) => {
                        setSelectedDate(date || null);
                        setSelectedTimeSlot(""); // Reset time slot when date changes
                      }}
                      disabled={(date) => {
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        return date < today;
                      }}
                      className="rounded-lg w-full max-w-full"
                      classNames={{
                        months: "flex flex-col gap-4 md:gap-6 w-full justify-center",
                        month: "flex flex-col gap-3 md:gap-6 w-full items-center",
                        caption: "flex justify-center pt-1 md:pt-2 pb-3 md:pb-4 relative items-center w-full px-8 md:px-12",
                        caption_label: "text-[#f0f4fd] font-['Roboto_Flex'] font-semibold text-base md:text-lg lg:text-xl",
                        nav: "flex items-center gap-1 md:gap-2",
                        nav_button: "text-[#f0f4fd] hover:bg-[#1f1f1f] hover:text-[#1b4bce] rounded-lg transition-all duration-200 size-8 md:size-10 lg:size-12 flex items-center justify-center",
                        nav_button_previous: "absolute left-1 md:left-2",
                        nav_button_next: "absolute right-1 md:right-2",
                        table: "w-full border-collapse mt-2 md:mt-4 mx-auto",
                        head_row: "flex mb-2 md:mb-4 justify-center w-full",
                        head_cell: "text-[#b3b3b2] font-['Roboto_Mono'] text-[10px] md:text-xs lg:text-sm font-medium w-9 md:w-12 lg:w-14 h-6 md:h-8 flex items-center justify-center flex-shrink-0",
                        row: "flex w-full mt-2 md:mt-3 justify-center",
                        cell: "relative p-0 text-center text-xs md:text-sm focus-within:relative focus-within:z-20 w-9 md:w-12 lg:w-14 h-9 md:h-12 lg:h-14 flex items-center justify-center flex-shrink-0",
                        day: "text-[#f0f4fd] hover:bg-[#1f1f1f] hover:text-[#f0f4fd] rounded-lg md:rounded-xl w-full h-full flex items-center justify-center font-['Roboto_Flex'] text-xs md:text-sm lg:text-base transition-all duration-200",
                        day_selected: "bg-[#1b4bce] text-white hover:bg-[#1640b8] hover:text-white rounded-lg md:rounded-xl font-semibold",
                        day_disabled: "text-[#666666] opacity-50 cursor-not-allowed",
                        day_outside: "text-[#666666] opacity-60",
                        day_today: "bg-[#1f1f1f] text-[#1b4bce] border-2 border-[#1b4bce] font-semibold rounded-lg md:rounded-xl",
                      }}
                      components={{
                        IconLeft: ({ ...props }) => (
                          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" {...props} />
                        ),
                        IconRight: ({ ...props }) => (
                          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" {...props} />
                        ),
                      }}
                    />
                  </div>
                </div>
                {!selectedDate && (
                  <p className="text-red-500 text-xs font-['Roboto_Flex']">Please select a date</p>
                )}
                {selectedDate && (
                  <div className="flex items-center gap-2">
                    <div className="bg-[#1b4bce]/20 border border-[#1b4bce] rounded-lg px-3 py-2">
                      <p className="text-[#1b4bce] text-sm font-['Roboto_Flex'] font-medium">
                        ✓ {format(selectedDate, "EEEE, MMMM dd, yyyy")}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Time Slot Selection */}
              {selectedDate && (
                <div className="flex flex-col gap-3 animate-fade-in">
                  <label className="font-['Roboto_Mono'] text-[#f0f4fd] text-sm md:text-base uppercase">
                    Select Time *
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTimeSlot(time)}
                        className={`px-4 py-2.5 rounded-lg font-['Roboto_Mono'] text-sm md:text-base transition-all duration-300 ${
                          selectedTimeSlot === time
                            ? "bg-[#1b4bce] text-white border-2 border-[#1b4bce] scale-105"
                            : "bg-[#0f0f0f] text-[#f0f4fd] border-2 border-[#1f1f1f] hover:border-[#1b4bce] hover:bg-[#1f1f1f]"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  {!selectedTimeSlot && (
                    <p className="text-red-500 text-xs font-['Roboto_Flex']">Please select a time slot</p>
                  )}
                  {selectedTimeSlot && (
                    <div className="flex items-center gap-2">
                      <div className="bg-[#1b4bce]/20 border border-[#1b4bce] rounded-lg px-3 py-2">
                        <p className="text-[#1b4bce] text-sm font-['Roboto_Flex'] font-medium">
                          ✓ Selected: {selectedTimeSlot}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !selectedDate || !selectedTimeSlot}
                className="bg-[#1b4bce] hover:bg-[#1640b8] disabled:bg-[#1f1f1f] disabled:cursor-not-allowed text-[#fefcfb] font-['Roboto_Mono'] font-medium text-sm md:text-base uppercase px-6 py-3 md:py-4 rounded-lg transition-all duration-300 mt-4"
              >
                {isSubmitting ? "Booking..." : "Book Meeting"}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="bg-green-500/20 border border-green-500 rounded-lg p-4">
                  <p className="text-green-500 font-['Roboto_Flex'] text-sm md:text-base">
                    ✓ Meeting booked successfully! Check your email for confirmation.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-500/20 border border-red-500 rounded-lg p-4">
                  <p className="text-red-500 font-['Roboto_Flex'] text-sm md:text-base">
                    ✗ Something went wrong. Please try again.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

