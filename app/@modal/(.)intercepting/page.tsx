import Modal from "@/components/Modal";

export const metadata = {
  title: "Intercepting Page | WeatherApp",
  description: "Intercepting Page",
  keywords: "Intercepting Page, Intercepting",
};

export default function InterceptingPage() {
  return (
    <Modal>
      <div className="p-5 bg-gray-200">
        <h1 className="text-4xl mb-5 text-center">
          Now you on the intercept modal Intercepting Page
        </h1>
      </div>
    </Modal>
  );
}
