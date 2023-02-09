import AuthForm from '~/components/auth/AuthForm';
import { validateCredentials } from '~/data/validation.server';
import authStyles from '~/styles/auth.css';

export default function AuthPage() {
  return <AuthForm />;
}

export async function action({ request }) {
  //* Example of extracting search parameters in back end code
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get('mode') || 'login';

  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);

  try {
    validateCredentials(credentials);
  } catch (error) {
    return error;
  }

  if (authMode === 'login') {
    // login logic
  } else {
    // signup logic (create user)
  }
}

export function links() {
  return [{ rel: 'stylesheet', href: authStyles }];
}
