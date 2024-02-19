import { useEffect, useState } from "react";

const ProfileViewCount = () => {
  const [viewCount, setViewCount] = useState(0);
  const updateViewCount = () => {
    setViewCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    updateViewCount();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <h1 id="count">Do follow me :D</h1>
    </div>
  );
};
export default ProfileViewCount;
