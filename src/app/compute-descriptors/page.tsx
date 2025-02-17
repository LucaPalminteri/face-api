import FaceDescriptors from "@/components/FaceDescriptors";

export default function ComputeDescriptorsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Compute Face Descriptors</h1>
      <FaceDescriptors />
    </div>
  );
}
