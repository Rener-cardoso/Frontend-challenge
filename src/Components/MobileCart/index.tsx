import { Button } from "../Button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

export function MobileCart() {
  return (
    <div className="fixed bottom-0 w-full p-4">
      <div className="absolute inset-0 -z-10 backdrop-blur-sm bg-white/70" />

      <Dialog>
        <DialogTrigger asChild>
          <Button>
            Your basket
            <div className="bg-white group-disabled:bg-[#5F5F5F] w-1 h-1 rounded-full" />
            1 item
          </Button>
        </DialogTrigger>

        <DialogContent className="bg-white">
          teste
        </DialogContent>
      </Dialog>
    </div>
  )
}