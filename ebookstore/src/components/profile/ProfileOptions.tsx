import { Spinner } from "@heroui/react";
import { type FC } from "react";
import ProfileMenu from "./ProfileMenu";
import { Button } from "@heroui/react";
import { Link } from "react-router-dom";
interface Props {
  busy?: boolean;
  profile?: any;
}
const ProfileOptions: FC<Props> = ({ busy, profile }) => {
  if (busy) return <Spinner size="sm" />;
  return profile ? (
    <ProfileMenu/>
  ) : (
    <Button as = {Link} to = "/sign-up" variant="bordered">Sign Up / In</Button>
  );
};

export default ProfileOptions;
