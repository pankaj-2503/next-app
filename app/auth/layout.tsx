export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="text-center mt-1 text-gray-500">
        20% off if signup in 3 days
      </div>
      {children}
    </div>
  );
}
