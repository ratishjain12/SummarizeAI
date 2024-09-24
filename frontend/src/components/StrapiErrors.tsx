interface strapiErrorsProps {
  message: string | null;
  name: string;
  status: string | null;
}

const StrapiErrors = ({ error }: { readonly error: strapiErrorsProps }) => {
  if (!error?.message) return null;
  return (
    <div className="text-pink-500 text-md italic py-2">{error.message}</div>
  );
};
export default StrapiErrors;
