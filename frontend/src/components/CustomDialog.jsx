/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const CustomDialog = ({
  buttonLabel = "Open Dialog",
  children,
  autoOpen = false,
}) => {
  const [open, setOpen] = useState(autoOpen);

  const handleOpen = () => setOpen(!open);

  // Automatically open dialog if autoOpen is true
  useEffect(() => {
    if (autoOpen) {
      setOpen(true);
    }
  }, [autoOpen]);

  return (
    <>
      {/* Trigger Button */}
      <Button
        onClick={handleOpen}
        className="px-4 py-2 bg-neutral-blue text-white rounded hover:bg-neutral-blue"
      >
        {buttonLabel}
      </Button>

      {/* Dialog */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            {/* Dialog Content */}
            <div>{children}</div>
            {/* Close Button */}
            <div className="mt-4 text-right">
              <Button
                onClick={handleOpen}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomDialog;
