import { Terminal } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
 
export function AlertDemo() {
  return (
    <Alert>
      <Terminal className="h-4 w-4 dark:text-background" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}